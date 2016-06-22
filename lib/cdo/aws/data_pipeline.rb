require 'json'
require 'erb'

module AWS
  class DataPipeline
    # Converts a data pipeline definition from exported JSON syntax to CloudFormation `AWS::DataPipeline::Pipeline` resource syntax.
    # Filters the `json_erb` string through ERB using the provided `variables` for extra customization.
    def self.to_cfn(name, description, json_erb, variables)
      local_vars = OpenStruct.new(variables)
      json = ERB.new(json_erb, nil, '-').result(local_vars.instance_eval{binding})
      pipeline = JSON.parse(json)
      {
        Type: 'AWS::DataPipeline::Pipeline',
        Properties: {
          Name: name,
          Description: description,
          ParameterObjects: pipeline['parameters'].dup.map do |parameter|
            id = parameter.delete 'id'
            {
              Id: id,
              Attributes: parameter.map do |key, value|
                {
                  Key: key,
                  StringValue: value
                }
              end
            }
          end,
          ParameterValues: pipeline['values'].dup.map do |id, value|
            {
              Id: id,
              StringValue: value
            }
          end,
          PipelineObjects: pipeline['objects'].dup.map do |object|
            id = object.delete 'id'
            name = object.delete 'name'
            {
              Id: id,
              Name: name,
              Fields: object.map do |key, value|
                if value.is_a?(Hash) && value['ref']
                  {
                    Key: key,
                    RefValue: value['ref']
                  }
                else
                  {
                    Key: key,
                    StringValue: value.is_a?(String) ? value : value.to_json
                  }
                end
              end
            }
          end
        }
      }.to_json
    end
  end
end
