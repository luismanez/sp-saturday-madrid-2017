import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'toolchainDemoStrings';
import ToolchainDemo from './components/ToolchainDemo';
import { IToolchainDemoProps } from './components/IToolchainDemoProps';
import { IToolchainDemoWebPartProps } from './IToolchainDemoWebPartProps';

export default class ToolchainDemoWebPart extends BaseClientSideWebPart<IToolchainDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IToolchainDemoProps > = React.createElement(
      ToolchainDemo,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
