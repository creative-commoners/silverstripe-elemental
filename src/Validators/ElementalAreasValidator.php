<?php

namespace DNADesign\Elemental\Validators;

use DNADesign\Elemental\Controllers\ElementalAreaController;
use DNADesign\Elemental\Forms\EditFormFactory;
use DNADesign\Elemental\Models\BaseElement;
use DNADesign\Elemental\Models\ElementalArea;
use SilverStripe\Core\Config\Config;
use SilverStripe\Forms\Validator;
use SilverStripe\ORM\DataObject;

class ElementalAreasValidator extends Validator
{
    /**
     * @param array $data
     */
    public function php($data)
    {
        $valid = true;
        $areaFieldNames = $this->getElementalAreaFieldNames($data['ClassName']);
        foreach ($areaFieldNames as $areaFieldName) {
            $elementsData = $data[$areaFieldName] ?? [];
            if (empty($elementsData)) {
                continue;
            }
            foreach (array_values($elementsData) as $elementData) {
                $elementID = $this->getElementID($elementData);
                if (!$elementID) {
                    continue;
                }
                $key = sprintf(EditFormFactory::FIELD_NAMESPACE_TEMPLATE, $elementID, 'ClassName');
                $className = $elementData[$key] ?? '';
                if (!$className) {
                    continue;
                }
                /** @var BaseElement $element */
                $element = DataObject::get_by_id($className, $elementID, false);
                $formData = ElementalAreaController::removeNamespacesFromFields($elementData, $elementID);
                $element->updateFromFormData($formData);
                /** @var ValidationResult $validationResult */
                $validationResult = $element->validate();
                if ($validationResult->isValid()) {
                    continue;
                }
                foreach ($validationResult->getMessages() as $message) {
                    $this->validationError(
                        "PageElements_{$elementID}_{$message['fieldName']}",
                        $message['message'],
                        $message['messageType'],
                        $message['messageCast']
                    );
                }
                $valid = false;
            }
        }
        return $valid;
    }

    /**
     * @param string $parentClassName
     * @return array
     */
    private function getElementalAreaFieldNames(string $parentClassName): array
    {
        $fieldNames = [];
        $hasOnes = Config::inst()->get($parentClassName, 'has_one');
        foreach ($hasOnes as $fieldName => $className) {
            if ($className !== ElementalArea::class) {
                continue;
            }
            $fieldNames[] = $fieldName;
        }
        return $fieldNames;
    }

    /**
     * @param array $elementData
     * @return string
     */
    private function getElementID(array $elementData): string
    {
        foreach (array_keys($elementData) as $key) {
            $rx = str_replace(['%d', '%s'], ['([0-9]+)', '(.+)'], EditFormFactory::FIELD_NAMESPACE_TEMPLATE);
            if (!preg_match("#^{$rx}$#", $key, $match)) {
                continue;
            }
            return $match[1];
        }
        return '';
    }
}
