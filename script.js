
    const text = document.getElementById("animated-text");
    const truck = document.getElementById("truck");
    
    const words = ["НЭГДСЭН ТҮГЭЭЛТ - ХҮРЭХ ГАЗАРТ ТҮРҮҮЛЖ ОЧНО!", "ТАНЫ ИТГЭЛ-МАНАЙ ХАРИУЦЛАГА", "МОНГОЛД ДАЯАР-ШИЙДЛИЙГ БИД ТҮГЭЭНЭ"];
    let wordIndex = 0;
    
    function updateScene() {
      wordIndex = (wordIndex + 1) % words.length;
      text.style.opacity = 0;
      setTimeout(() => {
        text.textContent = words[wordIndex];
        text.style.opacity = 1;
      }, 500);

      truck.style.transition = 'none';
      truck.style.transform = 'translateX(-100%)';
    
      setTimeout(() => {
        truck.style.transition = 'transform 9s linear';
        truck.style.transform = 'translateX(100%)';
      }, 50);
    }

    updateScene();
    setInterval(updateScene, 10000);


  const squareObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.5
    });
  
  document.querySelectorAll('.square1, .square2').forEach((el) => {
      squareObserver.observe(el);
  });

  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('job');
    const jobDetails = document.getElementById('job-details');
    
    jobDetails.innerHTML = "Ажлын байр " + jobId + " дэлгэрэнгүй мэдээлэл";
};

const steps = document.querySelectorAll('.step');
    const stepsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('active');
            }, index * 400);
          });
          stepsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    
    stepsObserver.observe(document.querySelector('.timeline'));


    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          left.classList.add('show');
          right.classList.add('show');
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(document.querySelector('.container'));