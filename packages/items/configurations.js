LicenseServer.Data.Licenses = new orion.collection('Items', {
	singularName: 'item',
	pluralName: 'items',
	title: 'Items',
	link:{
		title: 'Items'
	},

	tabular:{
		columns: [
      { data: "key", title: "Key" },
      orion.attributeColumn('user', 'user', 'User'),
      { data: "type", title: "Type"},
      orion.attributeColumn('hasOne', 'application', 'Applications')
		]
	}
});

LicenseServer.Schemas.Licenses = new SimpleSchema({
  key: {
    type: String
  },


  user: orion.attribute('user',{
    label: 'User',
    optional: true
  }, {
    publicationName: 'user-item-relation'
  }),
  
  //Valitsee lisenssin tyypin ja asettaa relaation lisenssin
  //Ja sovelluksen välille, hakien application dropdown menuun
  //Sovellukset vaihtoehdoiksi.
  type: {
    type: String,
    allowedValues: ["Knife", "Sharper knife", "Saw", "Other"]
  }, 
    application: orion.attribute('hasOne', {
      label: 'Application'
    }, {
      titleField: "Name",
      collection:LicenseServer.Data.Application,
      publicationName: "Application-item-relation"
    })
});

LicenseServer.Data.Licenses.attachSchema(LicenseServer.Schemas.Licenses);