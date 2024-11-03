// import React from "react";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Row, Col, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useDispatch } from "react-redux";
// import { currencyFormat } from "../../../utils/number";
// import { updateQty, deleteCartItem } from "../../../features/cart/cartSlice";

// const CartProductCard = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleQtyChange = (id, value) => {
//     dispatch(updateQty({ id, value }));
//   };

//   const deleteCart = (id) => {
//     dispatch(deleteCartItem(id));
//   };

//   return (
//     <div className="product-card-cart">
//       <Row>
//         <Col md={2} xs={12}>
//           <img src={item.productId.image} width={112} alt="product" />
//         </Col>
//         <Col md={10} xs={12}>
//           <div className="display-flex space-between">
//             <h3>{item.productId.name}</h3>
//             <button className="trash-button">
//               <FontAwesomeIcon
//                 icon={faTrash}
//                 width={24}
//                 onClick={() => deleteCart(item._id)}
//               />
//             </button>
//           </div>

//           <div>
//             <strong>{currencyFormat(item.productId.price, "USD")}</strong>
//           </div>
//           <div>Size: {item.size}</div>
//           <div>
//             Total: {currencyFormat(item.productId.price * item.qty, "USD")}
//           </div>
//           <div>
//             Quantity:
//             <Form.Select
//               onChange={(event) =>
//                 handleQtyChange(item._id, event.target.value)
//               }
//               required
//               defaultValue={item.qty}
//               className="qty-dropdown"
//             >
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={4}>4</option>
//               <option value={5}>5</option>
//               <option value={6}>6</option>
//               <option value={7}>7</option>
//               <option value={8}>8</option>
//               <option value={9}>9</option>
//               <option value={10}>10</option>
//             </Form.Select>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default CartProductCard;

import React, { useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { currencyFormat } from "../../../utils/number";
import { deleteCartItem } from "../../../features/cart/cartSlice";

const CartProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = () => {
    setShowConfirmModal(false);
    dispatch(deleteCartItem(item._id));
  };

  return (
    <>
      <div className="product-card-cart">
        <Row>
          <Col md={2} xs={12}>
            <img src={item.productId.image} width={112} alt="product" />
          </Col>
          <Col md={10} xs={12}>
            <div className="display-flex space-between">
              <h3>{item.productId.name}</h3>
              <button
                className="trash-button"
                onClick={() => setShowConfirmModal(true)}
              >
                <FontAwesomeIcon icon={faTrash} width={24} />
              </button>
            </div>
            <div>
              <strong>{currencyFormat(item.productId.price, "USD")}</strong>
            </div>
            <div>Size: {item.size}</div>
            <div>
              Total: {currencyFormat(item.productId.price * item.qty, "USD")}
            </div>
            <div>Quantity: {item.qty}</div>
          </Col>
        </Row>
      </div>

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you do not want to keep this product?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            No, Keep it
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartProductCard;
