<article class="map">
  <div id="map"></div>
  <script>
    function initMap() {
      var uluru = {lat:  -1.2833300, lng: 36.8166700};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  </script>
  <script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByfLPTDMlAQgWmlMW8Wp-OQ6lIOvvB_AM&callback=initMap">
  </script>
</article>
