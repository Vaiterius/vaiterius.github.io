// Animate only on entry; content stays visible if observation cannot run.
if (
	"IntersectionObserver" in window &&
	!window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
	const observer = new IntersectionObserver(
		(entries) => {
			const groups = new Map();
			for (const { target, isIntersecting } of entries) {
				if (!isIntersecting) continue;
				const group = target.closest("[data-reveal-group]") || target.parentElement;
				const index = groups.get(group) || 0;
				target.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
				target.classList.remove("is-pending");
				target.addEventListener(
					"animationend",
					() => target.classList.remove("is-revealing"),
					{ once: true },
				);
				target.classList.add("is-revealing");
				groups.set(group, index + 1);
				observer.unobserve(target);
			}
		},
		{ threshold: 0, rootMargin: "0px 0px -100px 0px" },
	);

	document.querySelectorAll("[data-reveal]").forEach((element) => {
		// Avoid shifting content already in view, including restored scroll positions.
		if (element.getBoundingClientRect().top < window.innerHeight) return;
		observer.observe(element);
		element.classList.add("is-pending");
	});
}
