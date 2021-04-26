let landingLabel99 = document.querySelector(".cms-label99");
if (landingLabel99) {
    let home = document.querySelector(".label99__home");

    let lifestyle = document.querySelector("a[href='#lifestyle']");
    lifestyle.addEventListener("click", toggleLoading);

    let lifestyleBack = document.querySelector(".lifestyle__back");
    lifestyleBack.addEventListener("click", () => {
        toggleLoading();
        setTimeout(() => {
            window.location.href = window.location.href.split("#")[0];
        }, 1900);
    });

    function toggleLoading() {
        let transitionLogo = document.querySelector(".transition__logo");
        let transitionBg = document.querySelector(".transition__bg");

        toggleDataSrc(transitionLogo);
        toggleDataSrc(transitionBg);

        home.classList.add("label99__transition");

        let html = document.querySelector("html");
        html.style.overflow = "hidden";

        setTimeout(() => {
            html.style.overflow = "auto";
            window.scrollTo({ top: 0, behavior: "smooth" });
            checkLifestylePage();
            home.classList.remove("label99__transition");

            toggleDataSrc(transitionLogo);
            toggleDataSrc(transitionBg);
        }, 2000);
    }

    function toggleDataSrc(obj) {
        if (obj.dataset.src) {
            obj.src = obj.dataset.src;
            obj.dataset.src = "";
        } else {
            obj.dataset.src = obj.src;
            obj.src = "";
        }
    }

    function checkLifestylePage() {
        if (window.location.href.indexOf("#lifestyle") > -1) {
            let home = document.querySelector(".label99__home");
            home.classList.toggle("label99__lifestyle");
        }
    }

    checkLifestylePage();
}
