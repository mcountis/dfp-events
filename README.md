# dfp-events

For use with Google's Doubleclick for Publishers (DFP).  Taps into dfp's logger function and triggers events.

## Methods:
### `googletag.on()`
```javascript
googletag.on(events,data,callback);
```
* `events` - string containing a list of events to bind to.
* `data` - (optional) data to be passed to the callback upon triggering, passed via arguments[0].data a la jQuery.
* `callback` - function to be called upon one of the events occuring.

### `googletag.off()`
```javascript
googletag.off(events,callback);
```
* `events` - string containing a list of events to remove callbacks from.
* `callback` - (optional) specific callback function to be removed from googletag.

## Events:

* gpt-google_js_loaded
* gpt-gpt_fetch
* gpt-gpt_fetched
* gpt-page_load_complete
* gpt-queue_start
* gpt-service_add_slot
* gpt-service_add_targeting
* gpt-service_collapse_containers_enable
* gpt-service_create
* gpt-service_single_request_mode_enable
* gpt-slot_create
* gpt-slot_add_targeting
* gpt-slot_fill
* gpt-slot_fetch
* gpt-slot_receiving
* gpt-slot_render_delay
* gpt-slot_rendering
* gpt-slot_rendered

## Examples:
Notice I use jQuery to cause changes to the DOM but not to bind or unbind the callbacks to the googletag object. Also the method calls are inside a `googletag.cmd.push` call to ensure the api is up and running.

### Bind callback to a DFP event
```javascript
googletag.cmd.push(function () {
	
	// add class 'empty' to ad div if the inserted iframe document is, in fact, empty
	googletag.on("gpt-slot_rendered",function(e,level,message,service,slot,reference){
		var	slotId = slot.getSlotId(),
			$slot = $("#"+slotId.getDomId());
		
		// DFP adds two iframes, one for calling scripts and one for displaying the ad. we want the one that is not hidden
		if($slot.find("iframe:not([id*=hidden])")
			.map(function () { return this.contentWindow.document; })
			.find("body")
			.children().length == 0
		){
			$slot.addClass("empty");
		}
	});
});
```

### Remove binding
```javascript
googletag.cmd.push(function () {
	googletag.off("gpt-slot_rendered");
});
```
