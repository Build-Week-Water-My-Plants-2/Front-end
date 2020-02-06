


    const [user] = useState(data);
    const [plants, setPlants] = useState(
      localStorage.getItem("plants") ? JSON.parse(localStorage.getItem("plants")) : []
    );
    useEffect(() => {
      localStorage.setItem("plants", JSON.stringify(plants));
    }, [cart]);
    const [empty] = useState([]);
    const addItem = item => {
      // add the given item to the cart
      setPlants([...plants, item]);
    };
    const removeItem = itemId => {
      setPlants(plants.filter(item => item.id !== itemId));
    };
    function clearPlants() {
      setPlants(empty);
    };
