import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import CodeEditorPageHeader from './CodeEditorPageHeader';
import CodeEditorPageFooter from './CodeEditorPageFooter';
import '../styles/CodeEditorPage.css';

const CodeEditorPage = () => {
  const [code, setCode] = useState('// write your code here');
  const [result, setResult] = useState('');
  const [problem, setProblem] = useState('');

  useEffect(() => {
    const fetchProblem = () => {
      const exampleProblem = 'Solve this problem: ...';
      setProblem(exampleProblem);
    };

    fetchProblem();
  }, []);

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const output = eval(code);
      setResult(String(output));
    } catch (error) {
      setResult(String(error));
    }
  };

  const submitCode = () => {
    setResult('Code submitted');
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {
    setCode(newValue);
  };

  return (
    <div className="code-editor-page">
      <CodeEditorPageHeader runCode={runCode} submitCode={submitCode} />
      <div className="content">
        <div className="problem-container">
          <h2>Problem</h2>
          <p>{problem}</p>
        </div>
        <div className="editor-container">
          <MonacoEditor
            width="100%"
            height="300px"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={{ selectOnLineNumbers: true }}
            onChange={onChange}
            editorDidMount={editorDidMount}
          />
          <div className="result-container">
            <h3>Result</h3>
            <p>{result}</p>
          </div>
        </div>
      </div>
      <CodeEditorPageFooter />
    </div>
  );
};

export default CodeEditorPage;
