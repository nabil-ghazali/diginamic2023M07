const Task = ({task}) => {
    return (
        <section>
            <label>{task.label}</label>
            <button>Valider</button>
            <button>Supprimer</button>
        </section>
    );
}

export default Task;