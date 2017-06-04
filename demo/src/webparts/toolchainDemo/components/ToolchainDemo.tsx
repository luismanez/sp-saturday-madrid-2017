import * as React from 'react';
import styles from './ToolchainDemo.module.scss';
import { IToolchainDemoProps } from './IToolchainDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ToolchainDemo extends React.Component<IToolchainDemoProps, void> {
  public render(): React.ReactElement<IToolchainDemoProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint Saturday Madrid 2017!</span>
              <p className="ms-font-l ms-fontColor-white">Version 1.0</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a className={styles.button} href="###base_url###/sitepages/spsmadrid test 01.aspx">###base_url###/sitepages/spsmadrid test 01.aspx</a>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
