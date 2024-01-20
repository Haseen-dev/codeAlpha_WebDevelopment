$("document").ready(function () {
  // this is we input day,month and a year
  //   function calculateAge() {
  //     const day = parseInt($("#day").val());
  //     const month = parseInt($("#month").val());
  //     const year = parseInt($("#year").val());

  //     if (isNaN(day) || isNaN(month) || isNaN(year)) {
  //       alert("please enter valid values...");
  //       return;
  //     }

  //     const dob = new Date(year, month - 1, day);
  //     const today = new Date();
  //     let age = today.getFullYear() - dob.getFullYear();

  //     if (
  //       dob.getMonth() > today.getMonth() ||
  //       (dob.getMonth === today.getMonth() && dob.getDate() > today.getDate())
  //     ) {
  //       age--;
  //     }
  //     $("#result").html(`Your age is ${age} years`);
  //   }

  //this is we use the calendar for dob
  $('#day,#month,#year').css("display",'none')
  function calculateAge() {
    const selectedDate = $("#datepicker").val();
    if (!selectedDate) {
      alert("please select valid of birth date");
      return;
    }
    const dob = new Date(selectedDate);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    if (
      dob.getMonth() > today.getMonth() ||
      (dob.getMonth === today.getMonth() && dob.getDate() > today.getDate())
    ) {
      age--;
    }
    $("#result").html(`Your age is ${age} years`);
  }
  $("#calculate").on("click", calculateAge);
});
