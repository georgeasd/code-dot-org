# == Schema Information
#
# Table name: pd_workshops
#
#  id                  :integer          not null, primary key
#  organizer_id        :integer          not null
#  location_name       :string(255)
#  location_address    :string(255)
#  processed_location  :text(65535)
#  course              :string(255)      not null
#  subject             :string(255)
#  capacity            :integer          not null
#  notes               :text(65535)
#  section_id          :integer
#  started_at          :datetime
#  ended_at            :datetime
#  created_at          :datetime
#  updated_at          :datetime
#  processed_at        :datetime
#  deleted_at          :datetime
#  regional_partner_id :integer
#  on_map              :boolean
#  funded              :boolean
#
# Indexes
#
#  index_pd_workshops_on_organizer_id         (organizer_id)
#  index_pd_workshops_on_regional_partner_id  (regional_partner_id)
#

class Pd::Workshop < ActiveRecord::Base
  acts_as_paranoid # Use deleted_at column instead of deleting rows.

  COURSES = [
    COURSE_CSF = 'CS Fundamentals',
    COURSE_CSP = 'CS Principles',
    COURSE_ECS = 'Exploring Computer Science',
    COURSE_CS_IN_A = 'CS in Algebra',
    COURSE_CS_IN_S = 'CS in Science',
    COURSE_CSD = 'CS Discoveries',
    COURSE_COUNSELOR = 'Counselor',
    COURSE_ADMIN = 'Admin'
  ]

  COURSE_NAMES_MAP = {
    COURSE_CSF => 'CS Fundamentals',
    COURSE_CSP => 'CS Principles',
    COURSE_ECS => 'Exploring Computer Science',
    COURSE_CS_IN_A => 'CS in Algebra',
    COURSE_CS_IN_S => 'CS in Science',
    COURSE_CSD => 'CS Discoveries',
    COURSE_COUNSELOR => 'Counselor',
    COURSE_ADMIN => 'Administrator'
  }

  COURSE_URLS_MAP = {
    COURSE_CSF => CDO.code_org_url('/educate/curriculum/elementary-school'),
    COURSE_CSP => CDO.code_org_url('/educate/csp'),
    COURSE_CSD => CDO.code_org_url('/educate/csd'),
    COURSE_CS_IN_S => CDO.code_org_url('/curriculum/science'),
    COURSE_CS_IN_A => CDO.code_org_url('/educate/algebra'),
    COURSE_ECS => 'http://www.exploringcs.org/'
  }

  STATES = [
    STATE_NOT_STARTED = 'Not Started',
    STATE_IN_PROGRESS = 'In Progress',
    STATE_ENDED = 'Ended'
  ]

  SUBJECTS = {
    COURSE_ECS => [
      SUBJECT_ECS_PHASE_2 = 'Phase 2 in-person',
      SUBJECT_ECS_UNIT_3 = 'Unit 3 - HTML',
      SUBJECT_ECS_UNIT_4 = 'Unit 4 - Scratch',
      SUBJECT_ECS_UNIT_5 = 'Unit 5 - Data',
      SUBJECT_ECS_UNIT_6 = 'Unit 6 - Robotics',
      SUBJECT_ECS_PHASE_4 = 'Phase 4: Summer wrap-up'
    ],
    COURSE_CS_IN_A => [
      SUBJECT_CS_IN_A_PHASE_2 = 'Phase 2 in-person',
      SUBJECT_CS_IN_A_PHASE_3 = 'Phase 3: Academic Year Development'
    ],
    COURSE_CS_IN_S => [
      SUBJECT_CS_IN_S_PHASE_2 = 'Phase 2: Blended Summer Study',
      SUBJECT_CS_IN_S_PHASE_3_SEMESTER_1 = 'Phase 3 - Semester 1',
      SUBJECT_CS_IN_S_PHASE_3_SEMESTER_2 = 'Phase 3 - Semester 2'
    ],
    COURSE_CSP => [
      SUBJECT_CSP_SUMMER_WORKSHOP = '5-day Summer',
      SUBJECT_CSP_WORKSHOP_1 = 'Units 1 and 2: The Internet and Digital Information',
      SUBJECT_CSP_WORKSHOP_2 = 'Units 2 and 3: Processing data, Algorithms, and Programming',
      SUBJECT_CSP_WORKSHOP_3 = 'Units 4 and 5: Big Data, Privacy, and Building Apps',
      SUBJECT_CSP_WORKSHOP_4 = 'Units 5 and 6: Building Apps and AP Assessment Prep'
    ],
    COURSE_CSD => [
      SUBJECT_CSD_UNITS_1_2 = 'Units 1 and 2: Problem Solving and Web Development',
      SUBJECT_CSD_UNIT_3 = 'Unit 3: Animations and Games',
      SUBJECT_CSD_UNITS_4_5 = 'Units 4 and 5: The Design Process and Data and Society',
      SUBJECT_CSD_UNIT_6 = 'Unit 6: Physical Computing'
    ]
  }

  # Section types by course
  SECTION_TYPE_MAP = {
    COURSE_CSF => 'csf_workshop',
    COURSE_CSP => 'csp_workshop',
    COURSE_ECS => 'ecs_workshop',
    COURSE_CS_IN_A => 'csina_workshop',
    COURSE_CS_IN_S => 'csins_workshop',
    COURSE_CSD => 'csd_workshop',
    COURSE_COUNSELOR => 'counselor_workshop',
    COURSE_ADMIN => 'admin_workshop'
  }.freeze
  SECTION_TYPES = SECTION_TYPE_MAP.values.freeze

  # Time constrains for payment, per subject.
  # Each subject has the following constraints:
  # min_days: the minimum # of days a teacher must attend in order to be counted at all.
  # max_days: the maximum # of days the workshop can be recognized for.
  # max_hours: the maximum # of hours the workshop can be recognized for.
  TIME_CONSTRAINTS_BY_SUBJECT = {
    SUBJECT_ECS_PHASE_2 => {min_days: 3, max_days: 5, max_hours: 30},
    SUBJECT_ECS_UNIT_3 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_ECS_UNIT_4 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_ECS_UNIT_5 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_ECS_UNIT_6 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_ECS_PHASE_4 => {min_days: 2, max_days: 3, max_hours: 18},
    SUBJECT_CS_IN_A_PHASE_2 => {min_days: 2, max_days: 3, max_hours: 18},
    SUBJECT_CS_IN_S_PHASE_2 => {min_days: 2, max_days: 3, max_hours: 18},
    SUBJECT_CS_IN_S_PHASE_3_SEMESTER_1 => {min_days: 1, max_days: 1, max_hours: 7},
    SUBJECT_CS_IN_S_PHASE_3_SEMESTER_2 => {min_days: 1, max_days: 1, max_hours: 7},
    SUBJECT_CS_IN_A_PHASE_3 => {min_days: 1, max_days: 1, max_hours: 7},
    SUBJECT_CSP_SUMMER_WORKSHOP => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_CSP_WORKSHOP_1 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_CSP_WORKSHOP_2 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_CSP_WORKSHOP_3 => {min_days: 1, max_days: 1, max_hours: 6},
    SUBJECT_CSP_WORKSHOP_4 => {min_days: 1, max_days: 1, max_hours: 6}
  }

  WORKSHOP_COURSE_ONLINE_LEARNING_MAPPING = {
    COURSE_CSP => 'CSP Support',
    COURSE_ECS => 'ECS Support',
    COURSE_CS_IN_A => 'CS in Algebra Support',
    COURSE_CS_IN_S => 'CS in Science Support'
  }.freeze

  validates_inclusion_of :course, in: COURSES
  validates :capacity, numericality: {only_integer: true, greater_than: 0, less_than: 10000}
  validates_length_of :notes, maximum: 65535
  validates_length_of :location_name, :location_address, maximum: 255
  validate :sessions_must_start_on_separate_days
  validate :subject_must_be_valid_for_course

  belongs_to :organizer, class_name: 'User'
  has_and_belongs_to_many :facilitators, class_name: 'User', join_table: 'pd_workshops_facilitators', foreign_key: 'pd_workshop_id', association_foreign_key: 'user_id'

  has_many :sessions, -> {order :start}, class_name: 'Pd::Session', dependent: :destroy, foreign_key: 'pd_workshop_id'
  accepts_nested_attributes_for :sessions, allow_destroy: true

  has_many :enrollments, class_name: 'Pd::Enrollment', dependent: :destroy, foreign_key: 'pd_workshop_id'
  belongs_to :section

  belongs_to :regional_partner

  def sessions_must_start_on_separate_days
    if sessions.all(&:valid?)
      unless sessions.map {|session| session.start.to_datetime.to_date}.uniq.length == sessions.length
        errors.add(:sessions, 'must start on separate days.')
      end
    else
      errors.add(:sessions, "must each have a valid start and end.")
    end
  end

  def subject_must_be_valid_for_course
    unless (SUBJECTS[course] && SUBJECTS[course].include?(subject)) || (!SUBJECTS[course] && !subject)
      errors.add(:subject, 'must be a valid option for the course.')
    end
  end

  def section_type
    SECTION_TYPE_MAP[course]
  end

  def self.organized_by(organizer)
    where(organizer_id: organizer.id)
  end

  def self.facilitated_by(facilitator)
    joins(:facilitators).where(users: {id: facilitator.id}).distinct
  end

  def self.enrolled_in_by(teacher)
    joins(:enrollments).where(pd_enrollments: {email: teacher.email}).distinct
  end

  def self.attended_by(teacher)
    joins(sessions: :attendances).where(pd_attendances: {teacher_id: teacher.id}).distinct
  end

  def self.find_by_section_code(section_code)
    joins(:section).find_by(sections: {code: section_code})
  end

  def self.in_state(state, error_on_bad_state: true)
    case state
      when STATE_NOT_STARTED
        where(started_at: nil)
      when STATE_IN_PROGRESS
        where.not(started_at: nil).where(ended_at: nil)
      when STATE_ENDED
        where.not(started_at: nil).where.not(ended_at: nil)
      else
        raise "Unrecognized state: #{state}" if error_on_bad_state
        none
    end
  end

  scope :group_by_id, -> {group('pd_workshops.id')}

  # Filters by scheduled start date (date of first session)
  def self.scheduled_start_on_or_before(date)
    joins(:sessions).group_by_id.having('(DATE(MIN(start)) <= ?)', date)
  end

  # Filters by scheduled start date (date of first session)
  def self.scheduled_start_on_or_after(date)
    joins(:sessions).group_by_id.having('(DATE(MIN(start)) >= ?)', date)
  end

  # Orders by the scheduled start date (date of the first session),
  # @param :desc [Boolean] optional - when true, sort descending
  def self.order_by_scheduled_start(desc: false)
    joins(:sessions).
      group_by_id.
      order('DATE(MIN(pd_sessions.start))' + (desc ? ' DESC' : ''))
  end

  # Orders by the number of active enrollments
  # @param :desc [Boolean] optional - when true, sort descending
  def self.order_by_enrollment_count(desc: false)
    left_outer_joins(:enrollments).
      group_by_id.
      order('COUNT(pd_enrollments.id)' + (desc ? ' DESC' : ''))
  end

  # Orders by the workshop state, in order: Not Started, In Progress, Ended
  # @param :desc [Boolean] optional - when true, sort descending
  def self.order_by_state(desc: false)
    order(%Q(
      CASE
        WHEN started_at IS NULL THEN "#{STATE_NOT_STARTED}"
        WHEN ended_at IS NULL THEN "#{STATE_IN_PROGRESS}"
        ELSE "#{STATE_ENDED}"
      END #{desc ? ' DESC' : ''})
    )
  end

  # Filters by scheduled end date (date of last session)
  def self.scheduled_end_on_or_before(date)
    joins(:sessions).group_by_id.having("(DATE(MAX(end)) <= ?)", date)
  end

  # Filters by scheduled end date (date of last session)
  def self.scheduled_end_on_or_after(date)
    joins(:sessions).group_by_id.having("(DATE(MAX(end)) >= ?)", date)
  end

  def self.scheduled_start_in_days(days)
    Pd::Workshop.joins(:sessions).group_by_id.having("(DATE(MIN(start)) = ?)", Date.today + days.days)
  end

  def self.scheduled_end_in_days(days)
    Pd::Workshop.joins(:sessions).group_by_id.having("(DATE(MAX(end)) = ?)", Date.today + days.days)
  end

  # Filters by date the workshop actually ended, regardless of scheduled session times.
  def self.end_on_or_before(date)
    where('(DATE(ended_at) <= ?)', date)
  end

  # Filters by date the workshop actually ended, regardless of scheduled session times.
  def self.end_on_or_after(date)
    where('(DATE(ended_at) >= ?)', date)
  end

  # Filters those those workshops that have not yet ended, but whose
  # final session was scheduled to end more than two days ago
  def self.should_have_ended
    in_state(STATE_IN_PROGRESS).scheduled_end_on_or_before(Time.zone.now - 2.days)
  end

  def course_name
    COURSE_NAMES_MAP[course]
  end

  def course_target
    COURSE_URLS_MAP[course]
  end

  def friendly_name
    start_time = sessions.empty? ? '' : sessions.first.start.strftime('%m/%d/%y')
    course_subject = subject ? "#{course} #{subject}" : course

    # Limit the friendly name to 255 chars so it can be used as Section.name (which is itself limited) in #start!
    "#{course_subject} workshop on #{start_time} at #{location_name}"[0...255]
  end

  # Puts workshop in 'In Progress' state, creates a section and returns the section.
  # If the workshop has already been started, it will return the existing section.
  def start!
    return section unless started_at.nil?
    raise 'Workshop must have at least one session to start.' if sessions.empty?

    self.started_at = Time.zone.now
    sessions.each(&:assign_code)
    self.section = Section.create!(
      name: friendly_name,
      user_id: organizer_id,
      section_type: section_type
    )
    save!
    section
  end

  # Ends the workshop, or no-op if it's already ended.
  # The return value is undefined.
  def end!
    return unless ended_at.nil?
    self.ended_at = Time.zone.now
    sessions.each(&:remove_code)
    save!
  end

  def state
    return STATE_NOT_STARTED if started_at.nil?
    return STATE_IN_PROGRESS if ended_at.nil?
    STATE_ENDED
  end

  def year
    return nil if sessions.empty?
    sessions.order(:start).first.start.strftime('%Y')
  end

  def self.send_reminder_for_upcoming_in_days(days)
    # Collect errors, but do not stop batch. Rethrow all errors below.
    errors = []
    scheduled_start_in_days(days).each do |workshop|
      workshop.enrollments.each do |enrollment|
        begin
          email = Pd::WorkshopMailer.teacher_enrollment_reminder(enrollment)
          email.deliver_now
        rescue => e
          errors << "teacher enrollment #{enrollment.id} - #{e.message}"
        end
      end
      workshop.facilitators.each do |facilitator|
        begin
          Pd::WorkshopMailer.facilitator_enrollment_reminder(facilitator, workshop).deliver_now
        rescue => e
          errors << "facilitator #{facilitator.id} - #{e.message}"
        end
      end
      begin
        Pd::WorkshopMailer.organizer_enrollment_reminder(workshop).deliver_now
      rescue => e
        errors << "organizer workshop #{workshop.id} - #{e.message}"
      end
    end

    raise "Failed to send #{days} day workshop reminders: #{errors.join(', ')}" unless errors.empty?
  end

  def self.send_reminder_to_close
    # Collect errors, but do not stop batch. Rethrow all errors below.
    errors = []
    should_have_ended.each do |workshop|
      begin
        Pd::WorkshopMailer.organizer_should_close_reminder(workshop).deliver_now
      rescue => e
        errors << "organizer should close workshop #{workshop.id} - #{e.message}"
      end
    end
    raise "Failed to send reminders: #{errors.join(', ')}" unless errors.empty?
  end

  def self.send_automated_emails
    send_reminder_for_upcoming_in_days(3)
    send_reminder_for_upcoming_in_days(10)
    send_reminder_to_close
  end

  def self.process_ended_workshop_async(id)
    workshop = Pd::Workshop.find(id)
    raise "Unexpected workshop state #{workshop.state}." unless workshop.state == STATE_ENDED

    workshop.send_exit_surveys

    workshop.update!(processed_at: Time.zone.now)
  end

  # Updates enrollments with resolved users.
  def resolve_enrolled_users
    enrollments.each do |enrollment|
      enrollment.update!(user: enrollment.resolve_user) unless enrollment.user
    end
  end

  def send_exit_surveys
    resolve_enrolled_users

    # Send the emails
    enrollments.each do |enrollment|
      if account_required_for_attendance?
        next unless enrollment.user

        # Make sure user joined the section
        next unless section.students.exists?(enrollment.user.id)
      end

      enrollment.send_exit_survey
    end
  end

  def self.process_location(address)
    result = Geocoder.search(address).try(:first)
    return nil unless result

    {
      latitude: result.latitude,
      longitude: result.longitude,
      formatted_address: result.formatted_address
    }.to_json
  end

  # Min number of days a teacher must attend for it to count.
  # @return [Integer]
  def min_attendance_days
    constraints = TIME_CONSTRAINTS_BY_SUBJECT[subject]
    if constraints
      constraints[:min_days]
    else
      1
    end
  end

  # Apply max # days for payment, if applicable, to the number of scheduled days (sessions).
  # @return [Integer] number of payment days, after applying constraints
  def effective_num_days
    max_days = TIME_CONSTRAINTS_BY_SUBJECT[subject].try {|constraints| constraints[:max_days]}
    [sessions.count, max_days].compact.min
  end

  # Apply max # of hours for payment, if applicable, to the number of scheduled session-hours.
  # @return [Integer] number of payment hours, after applying constraints
  def effective_num_hours
    actual_hours = sessions.map(&:hours).reduce(&:+)
    max_hours = TIME_CONSTRAINTS_BY_SUBJECT[subject].try {|constraints| constraints[:max_hours]}
    [actual_hours, max_hours].compact.min
  end

  # @return [Boolean] true if a Code Studio account and section membership is required for attendance, otherwise false.
  def account_required_for_attendance?
    ![Pd::Workshop::COURSE_COUNSELOR, Pd::Workshop::COURSE_ADMIN].include?(course)
  end

  def workshop_starting_date
    sessions.first.try(:start)
  end

  # @return [String] url for this workshop in the workshop dashboard
  # Note the latter part of the path is handled by React-Router on the client, and is not known by rails url helpers
  def workshop_dashboard_url
    Rails.application.routes.url_helpers.pd_workshop_dashboard_url + "/workshops/#{id}"
  end

  def associated_online_course
    ::Course.find_by(name: WORKSHOP_COURSE_ONLINE_LEARNING_MAPPING[course]).try(:plc_course) if WORKSHOP_COURSE_ONLINE_LEARNING_MAPPING[course]
  end

  # Get all the teachers that have actually attended this workshop via the attendence.
  def attending_teachers
    sessions.flat_map(&:attendances).flat_map(&:teacher).uniq
  end

  def local_summer?
    course == COURSE_CSP && subject == SUBJECT_CSP_SUMMER_WORKSHOP
  end

  # Get all enrollments for this workshop with no associated attendances
  def unattended_enrollments
    enrollments.left_outer_joins(:attendances).where(pd_attendances: {id: nil})
  end

  def organizer_or_facilitator?(user)
    organizer == user || facilitators.include?(user)
  end
end
