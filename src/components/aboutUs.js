export const AboutUs = (props) => {
    return (
        <div class="container-sm">
            <div class="row justify-content-md-center">
                <div class="col col-lg-2"></div>
                <div class="col-md-auto">
                    <h2 class="x-text-content-text-primary">
                        {props.data ? props.data.title : 'loading...'}
                    </h2>
                </div>
                <div class="col col-lg-2"></div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-lg-2"></div>
                <div class="col-md-auto">
                    <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                </div>
                <div class="col col-lg-2"></div>
            </div>
        </div>
    );
}