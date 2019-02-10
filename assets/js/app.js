function ContactController($scope) {
   $scope.contacts = [];
  
  $scope.addMail = function() {
    if(this.mailAdress) {
      $scope.contacts.push($scope.mailAdress);
      $scope.mailAdress = "";
    }
  };
}

