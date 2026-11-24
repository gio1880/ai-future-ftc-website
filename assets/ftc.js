// FTC #31591 site: countdown to the next event + reveal-on-scroll. Pages work without it.
(function () {
	var clock = document.querySelector('[data-countdown]');
	if (clock) {
		var target = new Date(clock.getAttribute('data-countdown')).getTime();
		var parts = {
			d: clock.querySelector('[data-d]'), h: clock.querySelector('[data-h]'),
			m: clock.querySelector('[data-m]'), s: clock.querySelector('[data-s]')
		};
		var tick = function () {
			var left = Math.max(0, target - Date.now());
			var s = Math.floor(left / 1000);
			parts.d.textContent = Math.floor(s / 86400);
			parts.h.textContent = String(Math.floor(s / 3600) % 24).padStart(2, '0');
			parts.m.textContent = String(Math.floor(s / 60) % 60).padStart(2, '0');
			parts.s.textContent = String(s % 60).padStart(2, '0');
		};
		tick();
		setInterval(tick, 1000);
	}
	var items = document.querySelectorAll('.reveal');
	if (!('IntersectionObserver' in window)) {
		items.forEach(function (el) { el.classList.add('in'); });
		return;
	}
	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
		});
	}, { rootMargin: '0px 0px -8% 0px' });
	items.forEach(function (el) { io.observe(el); });
})();
