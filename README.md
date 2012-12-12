# dfp-events

For use with Google's Doubleclick for Publishers (DFP).  Taps into dfp's logger function and triggers events using jQuery.

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

## Example:

```javascript
$(googletag).on("gpt-slot_rendered",function(e,level,message,service,slot,reference){
	var slotId = slot.getSlotId();
	var $slot = $("#"+slotId.getDomId());
	var iframe = $slot.children("iframe").get(0);
	
	// label ad-units with class 'empty'
	if($(iframe.contentDocument).find("body > *").length == 0){
		$slot.addClass("empty");
	}
});
```
