SASSY = {
  common: {
    init: function() {
      // application-wide code
      pagealert();
    }
  },

  users: {
    init: function() {
      // controller-wide code
    },

    show: function() {
      // action-specific code
    }
  },
  sessions: {
    init: function() {
    }
    
  },

  products: {
    init: function(){
    },

    show: function(){
    }
  }
};

UTIL = {
  exec: function( controller, action ) {
    var ns = SASSY,
        action = ( action === undefined ) ? "init" : action;

    if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
      ns[controller][action]();
    }
  },

  init: function() {
    var body = document.body,
        controller = body.getAttribute( "data-controller" ),
        action = body.getAttribute( "data-action" );

    UTIL.exec( "common" );
    UTIL.exec( controller );
    UTIL.exec( controller, action );
  }
};

$( document ).ready( UTIL.init );

