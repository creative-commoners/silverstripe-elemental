<?php

namespace DNADesign\Elemental\Validators;

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
            $elementsData = $data[$areaFieldName];
            if (!$elementsData) {
                continue;
            }
            foreach (array_values($elementsData) as $elementData) {
                $id = $this->getElementID($elementData);
                $className = $elementData["PageElements_{$id}_ClassName"] ?? '';
                if ($className) {
                    continue;
                }
                /** @var BaseElement $element */
                $element = DataObject::get_by_id($className, $id, false);
                $fields = array_keys(Config::inst()->get($className, 'db'));
                foreach ($fields as $field) {
                    $fieldName = "PageElements_{$id}_{$field}";
                    if (!array_key_exists($fieldName, $elementData)) {
                        continue;
                    }
                    $element->$field = $elementData[$fieldName];
                }
                /** @var ValidationResult $validationResult */
                $validationResult = $element->validate();
                if ($validationResult->isValid()) {
                    continue;
                }
                foreach ($validationResult->getMessages() as $message) {
                    $this->validationError(
                        "PageElements_{$id}_{$message['fieldName']}",
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

    private function getElementID($elementData)
    {
        foreach (array_keys($elementData) as $key) {
            if (!preg_match('#^PageElements_([0-9]+)_(.+)$#', $key, $match)) {
                continue;
            }
            return $match[1];
        }
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
}
