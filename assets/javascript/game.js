/* zakura.click(function() {
    // will send the selected character to the .yourcharacter div
  $( this ).appendTo(".yourcharacter");

     // console.log(selectedCharacter);
      if(zakura.appendTo(".yourcharacter")){
    sode.appendTo(".Enemy");
    zabi.appendTo(".Enemy");
    hyorin.appendTo(".Enemy");
  }
  });
  sode.click(function() {
    // will send the selected character to the .yourcharacter div
  $( this ).appendTo(".yourcharacter");

     // this will send the rest of the character tha wasnt selected to the ".enemy"
      if(sode.appendTo(".yourcharacter")){
    zakura.appendTo(".Enemy");
    zabi.appendTo(".Enemy");
    hyorin.appendTo(".Enemy");
  }
  });
  zabi.click(function() {
    // will send the selected character to the .yourcharacter div
  $( this ).appendTo(".yourcharacter");

     // console.log(selectedCharacter);
      if(zabi.appendTo(".yourcharacter")){
    sode.appendTo(".Enemy");
    zakura.appendTo(".Enemy");
    hyorin.appendTo(".Enemy");
  }
  });
  hyorin.click(function() {
    // will send the selected character to the .yourcharacter div
  $( this ).appendTo(".yourcharacter");

     // console.log(selectedCharacter);
      if(hyorin.appendTo(".yourcharacter")){
    sode.appendTo(".Enemy");
    zabi.appendTo(".Enemy");
    zakura.appendTo(".Enemy");
  }
  });

  // if sode is your selected character then you can choose to fight zakura, zabi, and hyorin 
 zakura.click(function() {

      if(zakura.appendTo(".Enemy") && zabi.appendTo(".Enemy") &&  hyorin.appendTo(".Enemy") && sode.appendTo(".yourcharacter")){
    zakura.appendTo(".defender");
  }
  });
zabi.click(function() {

if(zabi.appendTo(".Enemy") && zakura.appendTo(".Enemy") &&  hyorin.appendTo(".Enemy") && sode.appendTo(".yourcharacter")){
zabi.appendTo(".defender");
}
});
hyorin.click(function() {

if(zabi.appendTo(".Enemy") && zakura.appendTo(".Enemy") &&  hyorin.appendTo(".Enemy") && sode.appendTo(".yourcharacter")){
hyorin.appendTo(".defender");
}
});

 */