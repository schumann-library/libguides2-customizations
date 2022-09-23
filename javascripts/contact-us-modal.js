
const modalContent = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="contactModal"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Thank you</h4></div><div class="modal-body"><p>We\'ll respond as soon as possible.</p><p>For immediate assistance during business hours call 617-989-4040</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>'
$('body').append(modalContent)

// create an alert when form is submitted
function myfunction () {
  const empty = $('#droparea').find('.fld-input').filter(function () {
    return this.value === ''
  })
  if (!(empty.length)) {
    // all inputs are filled
    $('#contactModal').modal()
    $('#contactModal').on('hidden.bs.modal', function () {
      submitForm()
    })
  }
};

$(document).ready(function () {
  $('#form_save').attr('onclick', '').click(function () {
    event.preventDefault()
    myfunction()
  })
})
