
//OBJECTS BACKBONE
ObjectModel = Backbone.Model.extend({

    initialize : function () {

        console.log("model created");

    }});

ObjectsCollection = Backbone.Collection.extend({

    model: ObjectModel,


});

ObjectView = Backbone.View.extend({
    initialize: function(){
        this.model.bind('change', this.render.bind(this));
    },

    render: function(){

        this.$el.html("uuid : " + this.model.get("uuid") + " =====    "
            + "Name : " + this.model.get("name")  + "   =====        "
            + "Position : " + JSON.stringify(this.model.get("position")) + "   ======    "
            + "Rotation : " + JSON.stringify(this.model.get("rotation"))) ;
        return this;


    }
});

ObjectsView = Backbone.View.extend({

    render: function(){



    }


});











//SphereBackbone

ImageModel = Backbone.Model.extend({

    initialize : function () {

        console.log("model created");

    }});

ImagesCollection = Backbone.Collection.extend({

    model: ImageModel,


});

ImageView = Backbone.View.extend({
    initialize: function(){

    },

    render: function(){

        this.$el.html("Name : " + this.model.get("name")) ;
        return this;


    }
});

ObjectsView = Backbone.View.extend({

    render: function(){



    }


});

