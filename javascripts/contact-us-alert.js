// create an alert when form is submitted
$('#form_save').click(function () {
  const empty = $('#droparea').find('.fld-input').filter(function () {
    return this.value === ''
  })
  if (!(empty.length)) {
    // all inputs are filled
    alert("Thank you. We'll respond as soon as possible.\n\nFor immediate assistance when the library is open please call 617-989-4040.")
  };
})
