import React from 'react';
import Form from 'react-jsonschema-form';


const AddFormSchema = (props) => {
  // console.log(props);
  if(props.journalists.length === 0 || props.categories.length === 0 || props.regions.length === 0 ) return null;

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
        title: "Image"
        // format: "data-url"
      }
    }
  };

  var uiSchema = {
    headline: {
      "ui:widget": "textarea",
      "ui:options": {rows: 2},
      "ui:autofocus": true,
      classNames: "headline"
    },
    summary: {
      "ui:widget": "textarea",
      "ui:options": {rows: 15},
      classNames: "summary"
    },
    fullStory: {
      "ui:widget": "textarea",
      "ui:options": {rows: 20},
      classNames: "fullStory"
    },
    region: {
      "ui:placeholder": "Choose an option",
      "ui:emptyValue": regionLinks[4],
      classNames: "region"
    },
    categories: {
      "ui:emptyValue": regionLinks[0],
      classNames: "categories"
    },
    image: {
      "ui:widget": "file",
      classNames: "image"
    },
    journalists: {
      classNames: "journalists"
    }
  }


  const getRegionLinkById = (regionId) => {
    const region = props.regions.find((region) => {
      console.log(region);
      return region.id === regionId
    })
    console.log("LINK:"+region._links.self.href);
    return region._links.self.href
  }

  const getCategoriesLinksByIds = (categories) => {

    var categoriesLinks = [];
    for (var i = 0; i < props.categories.length; i++) {
      for (var j = 0; j < categories.length; j++) {
        if (props.categories[i].id === categories[j].id) {
          categoriesLinks.push(props.categories[i]._links.self.href)
        }
      }
    }
    return categoriesLinks;
  }

  const getJournalistByIds = (journalists) => {

    var journalistsLinks = [];
    for (var i = 0; i < props.journalists.length; i++) {
      for (var j = 0; j < journalists.length; j++) {
        if (props.journalists[i].id === journalists[j].id) {
          journalistsLinks.push(props.journalists[i]._links.self.href)
        }
      }
    }
    return journalistsLinks;
  }


    var newFormData = null;
    console.log("jfuisd",props.formData);
    if(props.formData){
      newFormData = {
        headline: props.formData.headline,
        summary: props.formData.summary,
        fullStory: props.formData.fullStory,
        imageUrl: props.formData.imageUrl,
        region: getRegionLinkById(props.formData.region.id),
        categories: getCategoriesLinksByIds(props.formData.categories),
        journalists: getJournalistByIds(props.formData.journalists)
      }

      uiSchema = {
        headline: {
          "ui:widget": "textarea",
          "ui:options": {rows: 2},
          "ui:autofocus": true
        },
        summary: {
          "ui:widget": "textarea",
          "ui:options": {rows: 15}
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
        },
        image: {
          "ui:widget": "hidden"
        }
      }

    }
    else {
      newFormData = null;
    }

  function handleFormInputChange(event){
    newFormData = event.formData;
  }



  function handleFormSubmit(event) {
    if (props.article) {
      newFormData = event.formData;
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
      onSubmit={handleFormSubmit} formData={newFormData} onChange={handleFormInputChange}>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormCancel}>Cancel</button>
      </div>
    </Form>
  )
}


export default AddFormSchema;
