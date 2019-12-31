import Component from '@glimmer/component';

const MAP_API = "/assets/images";

export default class MapComponent extends Component {
  get src() {
    let { lat, lng } = this.args;

    let coordinates = `${lat}${lng}`;

    return `${MAP_API}/${coordinates}`;
  }
}
