
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import './index.css';

export default function Home(): JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/terminal';
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="MKBLV OS Boot" description="Soul-coded system loading...">
      <div className="boot-wrapper">
        <div className="orb"></div>
        <div className="terminal-text">
          BOOTING MKBLV.OS<span className="cursor"></span>
        </div>
      </div>
    </Layout>
  );
}
