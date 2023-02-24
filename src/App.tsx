import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';

function App() {
  //Delete the @ts-ignore and you'll see error:
  //'Option' refers to a value, but is being used as a type here. Did you mean 'typeof Option'?
  //@ts-ignore
  const [options, setOptions] = React.useState<Option[] | undefined>();
  return (
    <div style={{width:'50vw'}}>
      <Typeahead
        options={["a","b","c"]}
        // this clearButton is double-imposed
        clearButton
    />
    </div>
  );
}

export default App;
