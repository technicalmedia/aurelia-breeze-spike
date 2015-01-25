import Q = require("q");import jQuery = require("jquery");  // jQuery must be imported before breeze.import breeze = require("breeze-client");
breeze.config.setQ(Q);
	// now breeze is ready to go...export = breeze;
