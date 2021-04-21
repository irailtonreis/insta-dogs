import React from 'react'
import styles from './UserStatsGraphs.module.css';

function UserStatsGraphs({data}) {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
      );

    return (
        <div className={`${styles.graph} animeLeft`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Acessos: {total}</p>
      </div>
        </div>
    )
}

export default UserStatsGraphs
