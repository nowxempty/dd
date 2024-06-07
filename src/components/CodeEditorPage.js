import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
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
    // 코드 실행 로직 (예제)
    try {
      // eslint-disable-next-line no-eval
      const output = eval(code);
      setResult(String(output));
    } catch (error) {
      setResult(String(error));
    }
  };

  const submitCode = () => {
    // 코드 제출 로직 (서버에 제출)
    // 예제: alert('Code submitted: ' + code);
    setResult('Code submitted');
    // 다음 페이지로 이동 로직 추가 (예: 피드백 페이지)
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {
    setCode(newValue);
  };

  return (
    <div className="code-editor-page">
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
      <button className="header-button" onClick={runCode}>Run Code</button>
      <button className="header-button" onClick={submitCode}>Submit Code</button>
    </div>
  );
};

export default CodeEditorPage;
