import React from 'react';
import Form from 'react-jsonschema-form';


const AddFormSchema = (props) => {

  if(!props.journalists || !props.categories || !props.regions || !props.formData) return null;

  const journalistLinks = props.journalists.map((journalist) => journalist._links.self.href);

  const journalistNames = props.journalists.map((journalist) => journalist.name);

  const categoriesLinks =props.categories.map((category) => category._links.self.href);

  const categoriesNames =props.categories.map((category) => category.name);

  const regionLinks = props.regions.map((region) => region._links.self.href);

  const regionNames = props.regions.map((region) => region.regionName);

  const schema = {
    type: "object",
    required: ["headline", "summary", "fullStory", "region", "categories", "journalists"],
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
          type: "string",
          enum: journalistLinks,
          enumNames: journalistNames
        },
        uniqueItems: true
      },
      categories: {
        type: "array",
        title: "Category",
        items: {
          type: "string",
          enum: categoriesLinks,
          enumNames: categoriesNames
        },
        uniqueItems: true
      },
      region: {
        type: "string",
        title: "Region",
        enum: regionLinks,
        enumNames: regionNames
      },
      image: {
        type: "string",
        title: "Image",
        format: "data-url"
      }
    }
  };

  const uiSchema = {
    summary: {
      "ui:widget": "textarea",
      "ui:options": {rows: 15, columns: 30}
    },
    fullStory: {
      "ui:widget": "textarea",
      "ui:options": {rows: 20}
    },
    region: {
      "ui:placeholder": "Choose an option",
      "ui:emptyValue": regionLinks[4]
    },
    categories: {
      "ui:emptyValue": regionLinks[0]
    }
  }


  const getRegionLinkById = (regionId) => {
    console.log(props.regions);
    const region = props.regions.find((region) => {
      return region.id === regionId
    })
    return region._links.self.href
  }

  const getCategoriesLinksByIds = (categories) => {
console.log(categories);
    // var categoryLinks = [];
    //
    // for (var i = 0; i < props.categories.length; i++) {
    //   for (var j = 0; j < categories.length; j++) {
    //     if (props.categories[i].id === categories[j].id) {
    //       categoryLinks.push(props.categories[i]._links.self.href)
    //     }
    //   }
    // }
    // return categoryLinks;
  }


  console.log(props.formData);
    const newFormData = {

      headline: props.formData.headline,
      summary: props.formData.summary,
      fullStory: props.formData.fullStory,
      imageUrl: props.formData.imageUrl,
      region: getRegionLinkById(props.formData._embedded.region.id)
      // categories: getCategoriesLinksByIds(props.formData._embedded.categories)
    }



  function handleFormSubmit(event) {
    if (props.article) {
      props.onEditArticleFormSubmit(event);
    }
    else{
      props.onNewArticleFormSubmit(event);
    }

  }

  function handleFormCancel(event) {
    console.log(event);
  }

  return(

    <Form schema={schema} uiSchema={uiSchema}
      onSubmit={handleFormSubmit} formData={newFormData}>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormCancel}>Cancel</button>
      </div>
    </Form>
  )
}


export default AddFormSchema;
