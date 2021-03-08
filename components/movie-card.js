import {html, render} from 'https://unpkg.com/lit-html?module';

const template = (ctx) => html`
<div class="card mb-4">
    <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">Wonder Woman 1984</h4>
        </div>
        <div class="card-footer">
            <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
        </div>

</div>
`;

class MovieCard extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        render(template(this), this, { eventContext: this} );
    }
}
export default MovieCard;

