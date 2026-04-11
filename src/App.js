import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ada Lovelace',
        bio: 'Pionnière de la programmation, elle a écrit le premier algorithme destiné à être traité par une machine.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/440px-Ada_Lovelace_portrait.jpg',
        profession: 'Mathématicienne & informaticienne',
      },
      show: false,
      elapsedTime: 0, // secondes écoulées depuis le montage
    };
  }

  // ─── Cycle de vie ───────────────────────────────────────────
  componentDidMount() {
    // Démarre le chronomètre au montage du composant
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoie l'intervalle pour éviter les fuites mémoire
    clearInterval(this.timer);
  }
  // ────────────────────────────────────────────────────────────

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '480px' }}>
        
        {/* Chronomètre */}
        <p style={{ color: '#888' }}>
          ⏱ Composant monté depuis : <strong>{elapsedTime}s</strong>
        </p>

        {/* Bouton toggle */}
        <button onClick={this.toggleProfile} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {/* Profil conditionnel */}
        {show && (
          <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: '120px', borderRadius: '50%', display: 'block', marginBottom: '12px' }}
            />
            <h2 style={{ margin: '0 0 4px' }}>{person.fullName}</h2>
            <p style={{ color: '#666', margin: '0 0 8px' }}>{person.profession}</p>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;