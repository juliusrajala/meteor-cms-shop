LicenseServer.Data.Application = new orion.collection("Applications", {
	singularName: 'application',
	pluralName: 'applications',
	title: 'applications',
	link: {
		title: 'Applications'
	},

	tabular:{
		columns:[
			{ data: "name", title: "Name"},
      { data: "description", title: "Description" }
		]
	}
});

LicenseServer.Schemas.Application = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  }
});

LicenseServer.Data.Application.attachSchema(LicenseServer.Schemas.Application);
