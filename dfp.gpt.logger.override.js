(function($){
	window.googletag = window.googletag || {};
	window.googletag.cmd = window.googletag.cmd || [];
	
	googletag.cmd.push(function(){
	
		var _log = googletag.debug_log.log;
		var addEvent = function(name,match){
			events.push({
				"name":name,
				"match":match
			});
		}
	
		var events = [];
		
		addEvent("gpt-google_js_loaded",			/Google service JS loaded/ig);
		addEvent("gpt-gpt_fetch",				/Fetching GPT implementation/ig);
		addEvent("gpt-gpt_fetched",				/GPT implementation fetched./ig);
		addEvent("gpt-page_load_complete",			/Page load complete/ig);
		addEvent("gpt-queue_start",				/^Invoked queued function/ig);
	
		addEvent("gpt-service_add_slot",			/Associated (.*) service with slot (.*)/ig);
		addEvent("gpt-service_add_targeting",			/Setting targeting attribute (.*) with value (.*) for service (.*)/ig);
		addEvent("gpt-service_collapse_containers_enable",	/Enabling collapsing of containers when there is no ad content/ig);
		addEvent("gpt-service_create",				/Created service: (.*)/ig);
		addEvent("gpt-service_single_request_mode_enable",	/Using single request mode to fetch ads/ig);
	
		addEvent("gpt-slot_create",				/Created slot: (.*)/ig);
		addEvent("gpt-slot_add_targeting",			/Setting targeting attribute (.*) with value (.*) for slot (.*)/ig);
		addEvent("gpt-slot_fill",				/Calling fillslot/ig);
		addEvent("gpt-slot_fetch",				/Fetching ad for slot (.*)/ig);
		addEvent("gpt-slot_receiving",				/Receiving ad for slot (.*)/ig);
		addEvent("gpt-slot_render_delay",			/Delaying rendering of ad slot (.*) pending loading of the GPT implementation/ig);
		addEvent("gpt-slot_rendering",				/^Rendering ad for slot (.*)/ig);
		addEvent("gpt-slot_rendered",				/Completed rendering ad for slot (.*)/ig);
		
		googletag.debug_log.log = function(level,message,service,slot,reference){
			var _arguments = Array.prototype.slice.call(arguments);
			for(var e = 0,el = events.length;e < el; e++)
				if(message.search(events[e].match) > -1){
					$(googletag).trigger(events[e].name,_arguments);
				}
			return _log.apply(this,arguments);
		};
	
	});
})(jQuery);
