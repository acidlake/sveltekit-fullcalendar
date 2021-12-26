<script>
	import { onMount } from 'svelte'
	import FullCalendar from 'svelte-fullcalendar';
  
	// Replace events with your json or api
	let events = [{ title: "Event Now", start: new Date() }];

	let options = {
		initialView: "dayGridMonth",
		plugins: [],
		locale: 'en',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
    // dateClick: (event) => alert("se le dio click", event.dateStr ),
    selectable: true,
    events
	};
  
	onMount(async () => {
		const common = (await import('@fullcalendar/common')).default
		options = {
                    ...options,
                    plugins: [
			(await import('@fullcalendar/daygrid')).default,
			(await import('@fullcalendar/timegrid')).default,
      (await import('@fullcalendar/interaction')).default,
		    ]
                };
	});

</script>
<section class="py-8" >
  <div class="container px-4 mx-auto">
    <div class="relative px-6 pb-6 py-4 bg-white rounded-xl">
      <div class="mb-6">
        <h3 class="text-xl font-bold" data-config-id="header2">Task Calendar</h3>
        <p class="text-sm text-gray-500">Your Subtitle here </p>
      </div>
      <div class="relative h-3/4">
        <div class="relative ">
          {#if events.length > 0}
            <FullCalendar {options}  />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>