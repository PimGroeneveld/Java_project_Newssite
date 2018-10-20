import React from 'react';
import Form from 'react-jsonschema-form';


const FormSchema = (props) => {

  if(!props.journalists) return null;

  const journalistIds = props.journalists.map((journalist) => journalist.id);

  const journalistNames = props.journalists.map((journalist) => journalist.name);

  const categoriesIds =props.categories.map((category) => category.id);

  const categoriesNames =props.categories.map((category) => category.name);

  const today = new Date();
  console.log(today);

  const schema = {
    type: "object",
    required: ["headline", "summary", "fullStory", "regions"],
    properties: {
      headline: {
        type: "string",
        title: "Headline"
      },
      summary: {
        type: "string",
        title: "Summary"
      },
      fullStory: {
        type: "string",
        title: "Full Story"
      },
      journalists: {
        type: "array",
        title: "Journalist",
        items: {
          type: "number",
          enum: journalistIds,
          enumNames: journalistNames
        },
        uniqueItems: true
      },
      categories: {
        type: "array",
        title: "Category",
        items: {
          type: "number",
          enum: categoriesIds,
          enumNames: categoriesNames,
          default: "GENERAL"
        },
        uniqueItems: true
      },
      regions: {
        type: "number",
        title: "Region",
        enum: [1, 2, 3, 4, 5],
        enumNames: ["Scotland", "England", "Wales", "Northern Ireland", "Others"],
        default: "-Region-"
        },
        image: {
          type: "string",
          title: "Image",
          format: "data-url"
        },
        publishDate: {
          type: "string",
          format: "date-time",
          default: today
        },
      done: {type: "boolean", title: "Done?", default: false}
    }
  };

  const uiSchema = {
    summary: {
      "ui:widget": "textarea",
      "ui:options": {rows: 15, columns: 30}
    },
    publishDate: {
      "ui:widget": "hidden"
    }
  }
  const log = (type) => console.log.bind(console, type);

return(

  <Form schema={schema} uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
)
}


export default FormSchema;
