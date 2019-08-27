import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { elementType } from 'types/elementType';
import { elementTypeType } from 'types/elementTypeType';
import { compose } from 'redux';
import { inject } from 'lib/Injector';
import classNames from 'classnames';
import i18n from 'i18n';
import { DropTarget } from 'react-dnd';
import { getDragIndicatorIndex } from 'lib/dragHelpers';
import { getElementTypeConfig } from 'state/editor/elementConfig';
import jQuery from 'jquery';

class ElementList extends Component {
  componentDidUpdate(prevProps) {
    const { blocks: oldBlocks } = prevProps;
    const { blocks: newBlocks } = this.props;

    if (!oldBlocks || oldBlocks.length !== newBlocks.length) {
      return;
    }

    // Calculate blocks that have moved
    const blocks = oldBlocks.filter(
      (oldElement, orderIndex) => oldElement.ID !== newBlocks[orderIndex].ID
    );

    blocks.forEach((element) => {
      // this is expensive, so should be limited to the instances that need it.
      const thisElement = ReactDOM.findDOMNode(element);
      jQuery('.htmleditor textarea', thisElement).entwine('ss').getEditor().repaint();
    })
  }

  getDragIndicatorIndex() {
    const { dragTargetElementId, draggedItem, blocks, dragSpot } = this.props;

    return getDragIndicatorIndex(
      blocks.map(element => element.ID),
      dragTargetElementId,
      draggedItem && draggedItem.ID,
      dragSpot
    );
  }

  /**
   * Renders a list of Element components, each with an elementType object
   * of data mapped into it. The data is provided by a GraphQL HOC registered
   * in registerTransforms.js.
   */
  renderBlocks() {
    const {
      ElementComponent,
      HoverBarComponent,
      DragIndicatorComponent,
      blocks,
      allowedElementTypes,
      elementTypes,
      areaId,
      onDragEnd,
      onDragOver,
      onDragStart,
      isDraggingOver,
    } = this.props;

    // Blocks can be either null or an empty array
    if (!blocks) {
      return null;
    }

    if (blocks && !blocks.length) {
      return <div>{i18n._t('ElementList.ADD_BLOCKS', 'Add blocks to place your content')}</div>;
    }

    const output = blocks.map((element) => (
      <div key={element.ID}>
        <ElementComponent
          element={element}
          areaId={areaId}
          type={getElementTypeConfig(element.BlockSchema.typeName, elementTypes)}
          link={element.BlockSchema.actions.edit}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
        />
        {isDraggingOver || <HoverBarComponent
          areaId={areaId}
          elementId={element.ID}
          elementTypes={allowedElementTypes}
        />}
      </div>
    ));

    const dragIndicatorIndex = this.getDragIndicatorIndex();
    if (isDraggingOver && dragIndicatorIndex !== null) {
      output.splice(dragIndicatorIndex, 0, <DragIndicatorComponent key="DropIndicator" />);
    }

    return output;
  }

  /**
   * Renders a loading component
   *
   * @returns {LoadingComponent|null}
   */
  renderLoading() {
    const { loading, LoadingComponent } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }
    return null;
  }

  render() {
    const { blocks } = this.props;
    const listClassNames = classNames(
      'elemental-editor-list',
      { 'elemental-editor-list--empty': !blocks || !blocks.length }
    );

    return this.props.connectDropTarget(
      <div className={listClassNames}>
        {this.renderLoading()}
        {this.renderBlocks()}
      </div>
    );
  }
}

ElementList.propTypes = {
  // @todo support either ElementList or Element children in an array (or both)
  blocks: PropTypes.arrayOf(elementType),
  elementTypes: PropTypes.arrayOf(elementTypeType).isRequired,
  allowedElementTypes: PropTypes.arrayOf(elementTypeType).isRequired,
  loading: PropTypes.bool,
  areaId: PropTypes.number.isRequired,
  dragTargetElementId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
};

ElementList.defaultProps = {
  blocks: [],
  loading: false,
};

export { ElementList as Component };

const elementListTarget = {
  drop(props, monitor) {
    const { blocks } = props;
    const elementTargetDropResult = monitor.getDropResult();

    if (!elementTargetDropResult) {
      return {};
    }

    const { target: dropTarget, dropSpot } = elementTargetDropResult;
    const draggedItem = monitor.getItem();
    const dropIndex = getDragIndicatorIndex(
      blocks.map(element => element.ID),
      dropTarget,
      draggedItem,
      dropSpot,
    );
    // The drop index is for the element after the insert indicator - the drop target when dropSpot
    // is 'top', and we shift the target down in case of 'bottom' {@see getDragIndicatorIndex}
    // But we insert AFTER id, so must move the index back one in order to get the correct
    // element's ID.
    const dropAfterID = blocks[dropIndex - 1] ? blocks[dropIndex - 1].ID : '0';
    const draggedItemIndex = blocks.findIndex(item => item === monitor.getItem());
    // if (draggedItemIndex === dropIndex) {
    // // do nothing if there is no need to update order
    //   return {};
    // }
    return {
      ...elementTargetDropResult,
      dropAfterID,
    };
  },
};

export default compose(
  DropTarget('element', elementListTarget, (connector, monitor) => ({
    connectDropTarget: connector.dropTarget(),
    draggedItem: monitor.getItem(),
  })),
  inject(
    ['Element', 'Loading', 'HoverBar', 'DragPositionIndicator'],
    (ElementComponent, LoadingComponent, HoverBarComponent, DragIndicatorComponent) => ({
      ElementComponent,
      LoadingComponent,
      HoverBarComponent,
      DragIndicatorComponent,
    }),
    () => 'ElementEditor.ElementList'
  )
)(ElementList);
