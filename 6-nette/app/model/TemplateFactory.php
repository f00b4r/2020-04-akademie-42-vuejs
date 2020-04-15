<?php declare(strict_types = 1);

namespace App\Model;

use Latte\Engine;
use Nette\Application\UI;
use Nette\Application\UI\ITemplate;
use Nette\Bridges\ApplicationLatte\Template;
use Nette\Bridges\ApplicationLatte\TemplateFactory as NTemplateFactory;

final class TemplateFactory extends NTemplateFactory
{

	public function createTemplate(UI\Control $control = null): ITemplate
	{
		/** @var Template $template */
		$template = parent::createTemplate($control);

		$template->getLatte()->onCompile[] = function (Engine $engine) {
			WebpackMacro::register($engine->getCompiler(), );
		};

		return $template;
	}

}
