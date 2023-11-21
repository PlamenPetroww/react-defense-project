const ProductDeleteModal = ({
    onClose,
    onDelete,
}) => {

    const deleteClickHandler = () => {
        onDeleteClick(productId);
        console.log(productId)
    }
    
    return (
        <div>
            <p>Are you sure you want to delete this Product?</p>
            <button type="submit" onClick={onDelete}>Delete</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </div>
    );
};

export default ProductDeleteModal;