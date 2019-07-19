import jQuery from 'jquery';
import { loadComponent } from 'lib/Injector';
import React from 'react';
import ReactDOM from 'react-dom';
import { fieldToComponent } from '../../lib/buildComponent';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .form__field-holder .adjustable-title-field').entwine({
    onmatch() {
      const Component = loadComponent('AdjustableTitleField');
      const schemaData = this.data('schema');
      const schemaState = this.data('state');

      console.log(schemaData, schemaState);

      if (!schemaData) {
        return;
      }

      ReactDOM.render(<Component schema={schemaData} initialState={schemaState}/>, this[0]);
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  })
});
