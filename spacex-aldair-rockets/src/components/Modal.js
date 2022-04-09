export const Modal = ({rocket}) => (
<div className="modal fade" id={`popup${rocket.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row rocket-info">
          <div className="col-sm-4">
            <h4>Altura</h4>
            <p>{rocket.height.meters} m</p>
          </div>
          <div className="col-sm-4">
            <h4>Diametro</h4>
            <p>{rocket.diameter.meters} m</p>
            </div>
          <div className="col-sm-4">
            <h4>Peso</h4>
            <p>{rocket.mass.kg} kg</p>
            </div></div>

      </div>
    </div>
  </div>
</div>
);