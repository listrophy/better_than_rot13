determineIncremental = (function determineIncremental(original) {
  return function() {
    original();
    if (incrSteps == 0){
      incrElem = currentSlide.find(".incremental > ol > li");
      incrSteps = incrElem.size();
    }
    if (incrSteps == 0){
      incrElem = currentSlide.find(".incrementaltable > table tr");
      incrSteps = incrElem.size();
    }
    incrElem.each(function(s, elem) {
      $(elem).css('visibility', 'hidden');
    });
  };
}(determineIncremental));
