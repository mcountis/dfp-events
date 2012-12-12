dfp-events
==========

For use with Google's Doubleclick for Publishers (DFP).  Taps into dfp's logger function and fires triggers events using jQuery.

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
