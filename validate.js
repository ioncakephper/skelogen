const Ajv = require('ajv');
const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const schemaPath = path.join(process.cwd(), 'schemas', 'outline.schema.json');
const outlinesDir = path.join(process.cwd(), '__outlines__');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const addFormats = require('ajv-formats');
const ajv = new Ajv({ allowMatchingProperties: true });
addFormats(ajv);
const validate = ajv.compile(schema);

fs.readdirSync(outlinesDir).forEach((file) => {
  if (file.endsWith('.yml')) {
    const filePath = path.join(outlinesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const data = yaml.parse(content);
    const valid = validate(data);
    if (!valid) {
      console.log(`Validation failed for ${file}:`);
      console.log(validate.errors);
    }
  }
});
