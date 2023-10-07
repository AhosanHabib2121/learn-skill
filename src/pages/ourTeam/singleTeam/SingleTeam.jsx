import PropTypes from 'prop-types'

const SingleTeam = ({ singleTeam }) => {
    const {image, name, designation } = singleTeam;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={image} alt="not found" className="rounded-full w-40 h-40" />
            </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-bold font-poppins">{ name}</h2>
                    <p className='text-base font-semibold font-poppins'>{ designation }</p>
                    <div className="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};
SingleTeam.propTypes = {
    singleTeam: PropTypes.object.isRequired,
}
export default SingleTeam;