    $(document).ready(function() 
    {
    $('#userInfoForm').submit(function(event)
     {
      event.preventDefault();
      var formData = $(this).serializeArray();
      var userInfo = {};
      $.each(formData, function(_, item) {
        userInfo[item.name] = item.value;
      });
      displayUserInfo(userInfo);
      this.reset();
    });
  
    $('#clearForm').click(function() {
      $('#userInfoForm')[0].reset();
    });
  
    function displayUserInfo(userInfo) {
      var fullName = userInfo.firstName + ' ' + userInfo.lastName;
      var userCard = `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${fullName}</h5>
              <p class="card-text"><strong>Email:</strong> ${userInfo.email}</p>
              <p class="card-text"><strong>Phone:</strong> ${userInfo.phone}</p>
              <p class="card-text"><strong>Date of Birth:</strong> ${userInfo.dob}</p>
              <p class="card-text"><strong>Gender:</strong> ${userInfo.gender}</p>
              <p class="card-text"><strong>Address:</strong> ${userInfo.address}</p>
            </div>
          </div>
        </div>
      `;
      $('#userCards').append(userCard);
    }
    });
  
  
  