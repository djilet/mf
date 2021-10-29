import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/meteorcms.loc/public/api",
  withCredentials: false

});

export const mapApi = {
  loadRegion() {
    return instance.get(`region`).then(response => response.data);
  },
  loadMarkers(id, participant) {
    if (id!==undefined && participant!==undefined) {
      const request = id.map(el => `region_id[]=${el}&`);
      return instance.get(`building?${request.join("")}participant=${participant}`)
        .then(response => response.data);
    } if (id!== undefined){
      const request = id.map(el => `region_id[]=${el}&`);
      return instance.get(`building?${request.join("")}`)
        .then(response => response.data);
    } if (participant!==undefined){
      return instance.get(`building?participant=${participant}`)
        .then(response => response.data);
    }
      return instance.get(`building`)
        .then(response => response.data);
  },
  loadObject(id) {
    return instance.get(`building/${id}`).then(response => response.data);
  }
};


// https://back.minstroy.it-meteor.ru/api/region
//   https://back.minstroy.it-meteor.ru/api/building
//     https://back.minstroy.it-meteor.ru/api/building/1
//       https://back.minstroy.it-meteor.ru/api/building/video/419afd9b-bd8a-44b3-b114-c31896346f82.mp4
//         https://back.minstroy.it-meteor.ru/api/building/audio/8c92b941-3220-4fc8-b56d-bdc81a61ee9f.mp3
//           https://back.minstroy.it-meteor.ru/api/building/image/7bae93b6-9abd-4ebd-94c8-cd8e85660ccf.jpeg
