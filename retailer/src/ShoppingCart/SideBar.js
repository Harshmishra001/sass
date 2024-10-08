export default function SideBar({ price, discount }) {
    return (
        <div className="card flex-grow-1 d-flex flex-column justify-content-between sidebar-card">
            <div className="card-header sidebar-header">
                <h4>Price Details</h4>
            </div>
            <div className="card-body d-flex flex-column sidebar-body justify-content-around">
                <p><strong>Total Price:</strong> ${price}</p>
                <p><strong>Discount:</strong> ${discount}</p>
                <p><strong>Delivery:</strong> Free</p>
                <p><strong>Charges:</strong> ${price - discount}</p>
            </div>
        </div>
    );
}
