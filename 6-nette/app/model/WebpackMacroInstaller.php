<?php declare(strict_types = 1);

namespace App\Model;

use Latte\Compiler;
use Latte\Engine;

final class WebpackMacroInstaller
{

	/** @var string */
	private $manifest;

	public function __construct(string $manifest)
	{
		$this->manifest = $manifest;
	}

	public function install(Engine $engine): void
	{
		WebpackMacro::register($engine->getCompiler(), $this->manifest);
	}

}
